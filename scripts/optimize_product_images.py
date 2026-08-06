"""Create consistent, non-generative product images from the catalogue sources."""

from pathlib import Path
import re

from PIL import Image, ImageEnhance, ImageFilter, ImageOps


ROOT = Path(__file__).resolve().parents[1]
DATA_FILE = ROOT / "src" / "data" / "products.js"
SOURCE_ROOT = ROOT / "src" / "assets"
OUTPUT_ROOT = SOURCE_ROOT / "optimized"
MAX_EDGE = 1600


def referenced_images():
    text = DATA_FILE.read_text(encoding="utf-8")
    return sorted(set(re.findall(r'"image":\s*"([^"]+)"', text)))


def clean_image(source: Path, destination: Path):
    image = Image.open(source)
    image = ImageOps.exif_transpose(image)

    if image.mode not in ("RGB", "RGBA"):
        image = image.convert("RGBA" if "transparency" in image.info else "RGB")

    image = ImageEnhance.Color(image).enhance(1.04)
    image = ImageEnhance.Contrast(image).enhance(1.06)
    image = ImageEnhance.Brightness(image).enhance(1.02)

    if max(image.size) > MAX_EDGE:
        scale = MAX_EDGE / max(image.size)
        image = image.resize(
            (round(image.width * scale), round(image.height * scale)),
            Image.Resampling.LANCZOS,
        )

    image = image.filter(ImageFilter.UnsharpMask(radius=1.1, percent=70, threshold=3))
    destination.parent.mkdir(parents=True, exist_ok=True)

    if image.mode == "RGBA":
        background = Image.new("RGB", image.size, "white")
        background.paste(image, mask=image.getchannel("A"))
        image = background
    else:
        image = image.convert("RGB")

    image.save(destination, format="JPEG", quality=88, optimize=True, progressive=True)


def main():
    processed = 0
    skipped = []

    for relative_path in referenced_images():
        source = SOURCE_ROOT / relative_path
        if not source.exists():
            skipped.append(f"missing: {relative_path}")
            continue

        destination = OUTPUT_ROOT / Path(relative_path).with_suffix(".jpg")
        try:
            clean_image(source, destination)
            processed += 1
        except Exception as error:  # pragma: no cover - defensive reporting for image files
            skipped.append(f"failed: {relative_path} ({error})")

    print(f"Processed {processed} product images into {OUTPUT_ROOT}")
    if skipped:
        print("Skipped:")
        print("\n".join(skipped))


if __name__ == "__main__":
    main()
