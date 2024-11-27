from os import listdir, stat
from os.path import isfile
from pathlib import Path
import subprocess

COMICS_DIR = Path(__file__).parent / "public" / "cdn" / "comics"
IMAGE_FORMAT = (".png", ".jpg", ".jpeg", ".bmp", ".gif")
CWEBP_PATH = Path("C:/Program Files/libwebp/bin")

files = (
    f
    for f in listdir(COMICS_DIR)
    if isfile(COMICS_DIR / f) and f.lower().endswith(IMAGE_FORMAT)
)
for f in files:
    input = COMICS_DIR / f
    output = COMICS_DIR / f"{f[:f.index('.')]}.webp"
    p = subprocess.Popen(
        (
            [CWEBP_PATH / "gif2webp", input, "-o", output]
            if f.lower().endswith(".gif")
            else [CWEBP_PATH / "cwebp", "-lossless", "-q", "100", input, "-o", output]
        ),
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
    )
    p.communicate()
    assert not p.returncode, p.stdout.read().decode()
    print(
        f"{f} compression ratio {stat(output).st_size / stat(input).st_size * 100:.2f}%"
    )
