#!/usr/bin/env python3

# Pulls bundles from the open-source chartfactor-js project's CFN build
# (../chartfactor-js/dist/cfn-providers/) into chartfactor-node/cft/<pkg>/.
# Run `npm run build:bundles:cfn-providers` in chartfactor-js first.

import os
from shutil import copyfile
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--clean', help='Clean only.', action='store_true')
args = parser.parse_args()

cfs_project_base = os.getcwd()
cft_js_project_base = os.path.join(cfs_project_base, '..', 'chartfactor-js')
cft_js_dist_dir = os.path.join(cft_js_project_base, 'dist', 'cfn-providers')
cfs_cft_base = os.path.join(cfs_project_base, 'cft')

libs = ['cftoolkit']
assets = [
    'cft-elasticsearch-provider',
    'cft-redshift-provider',
    'cft-google-bigquery-provider',
    'cft-databricks-provider'
]

all_sufix = ['.js', '.js.map', '.dev.js', '.dev.js.map', '.min.js', '.min.js.map']

def clean():
    for lib in libs:
        for sufix in all_sufix:
            try:
                os.remove(os.path.join(cfs_cft_base, lib, lib + sufix))
            except:
                pass
    for asset in assets:
        for sufix in all_sufix:
            try:
                os.remove(os.path.join(cfs_cft_base, asset, asset + sufix))
            except:
                pass

def importBundles():
    clean()
    print("Importing CFT bundles from chartfactor-js using the following directories:")
    print("cfs_project_base", cfs_project_base)
    print("cft_js_project_base", cft_js_project_base)
    print("cft_js_dist_dir", cft_js_dist_dir)

    for lib in libs:
        try:
            from_file = os.path.join(cft_js_dist_dir, lib + '.min.js')
            to_file = os.path.join(cfs_cft_base, lib, lib + '.min.js')
            copyfile(from_file, to_file)
        except Exception as e:
            print(e, 'The %s file could not be copied' % lib)

    for asset in assets:
        try:
            from_file = os.path.join(cft_js_dist_dir, asset + '.min.js')
            to_file = os.path.join(cfs_cft_base, asset, asset + '.min.js')
            copyfile(from_file, to_file)
        except Exception as e:
            print(e, 'The %s file could not be copied' % asset)

def main():
    if args.clean:
        print("Performing cleaning on chartfactor server")
        clean()
        return

    print("Start")
    importBundles()
    print("End")

if __name__ == '__main__':
    main()
