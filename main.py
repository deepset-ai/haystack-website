import argparse
import os
import sys
import re

from pathlib import Path


TARGETS = (
    'latest',
    'v1.5.0',
    'v1.4.0',
    'v1.3.0',
    'v1.2.0',
    'v1.1.0',
    'v1.0.0',
    'v0.10.0',
)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Migrate .mdx files to .md')
    parser.add_argument('Source', metavar='source', type=str, help='path to .mdx files')
    parser.add_argument('Dest', metavar='dest', type=str, help='where to write .md files')

    args = parser.parse_args()

    src = Path(args.Source)
    if not src.is_dir():
        print("Please specify an existing folder as the source path")
        sys.exit(1)

    dst = Path(args.Dest)
    if not dst.is_dir():
        print("Please specify an existing folder as the destination path")
        sys.exit(1)

    mdx_re = re.compile(r'<(Swagger|Disclosures|Tabs)')

    for d in Path(src).iterdir():
        rel_path = d.relative_to(src)
        if rel_path.name not in TARGETS:
            continue

        for root, d_names, f_names in os.walk(d):
            dest_path = dst / root
            dest_path.mkdir(parents=True)
            for f_name in f_names:
                orig = Path(root) / f_name
                if orig.suffix != ".mdx":
                    continue

                dest_file = dest_path / f_name
                with open(orig) as sf:
                    mdx = sf.read()
                    if mdx_re.findall(mdx):
                        print("MDX content found in", dest_file)
                    with open(dest_file, 'w') as df:
                        df.write(mdx)
                    dest_file.rename(dest_file.with_suffix(".md"))
