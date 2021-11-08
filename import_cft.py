#!/usr/bin/env python3

import os
from shutil import copyfile
import argparse
from subprocess import call

parser = argparse.ArgumentParser()
parser.add_argument('--prod', help='Copy prod version.', action='store_true')
parser.add_argument('--dev', help='Copy dev version.', action='store_true')
parser.add_argument('--clean', help='Clean only.', action='store_true')
args = parser.parse_args()

cfs_project_base = os.getcwd()
cft_project_base = os.path.join(cfs_project_base, '..', 'chartfactor-toolkit')
cft_lib_dir = os.path.join(cft_project_base, 'lib')
cft_assets_dir = os.path.join(cft_project_base, 'demos', 'assets')
cfs_cft_base = os.path.join(cfs_project_base, 'cft')

assets = ['cft-elasticsearch-provider','cft-redshift-provider', 'cft-google-bigquery-provider']
#'cft-dremio-provider', 'cft-google-bigquery-provider', 'cft-ksql-provider', 'cft-sparksql-provider', 'cft-zoomdata-provider']

all_sufix = ['.js', '.js.map', '.dev.js', '.dev.js.map', '.min.js', '.min.js.map']

def clean():
    for asset in assets:
        for sufix in all_sufix:
            try:
                os.remove(os.path.join(cfs_cft_base, asset, asset + sufix))
            except:
                pass

def prod():
    clean()
    print("Importing production ready CFT using the following directories:")
    print("cfs_project_base", cfs_project_base)
    print("cft_project_base", cft_project_base)

    for asset in assets:
        try:
            from_file = os.path.join(cft_assets_dir, asset + '.min.js')
            to_file = os.path.join(cfs_cft_base, asset, asset + '.min.js')
            copyfile(from_file, to_file)
        except:
            print('The %s file could not be copied' % asset)

def dev():
    clean()
    print("Importing development CFT using the following directories:")
    print("cfs_project_base", cfs_project_base)
    print("cft_project_base", cft_project_base)

    for asset in assets:
        try:
            from_file = os.path.join(cft_assets_dir, asset + '.dev.js')
            to_file = os.path.join(cfs_cft_base, asset, asset + '.min.js')
            copyfile(from_file, to_file)
            # call(['ln', '-s', from_file, to_file])
            # call(['touch', '-h', to_file])
        except:
            print('The %s file could not be link' % asset)

def main():
    if args.clean:
        print("Performing cleaning on chartfactor server")
        clean()
        return

    print("Start")

    if args.dev:
        dev()
    else:
        prod()

    print("End")

if __name__ == '__main__':
    main()
