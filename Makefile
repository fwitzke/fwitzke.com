.PHONY: prepare_dist_folder

prepare_dist_folder:
	mkdir -p dist
	cp -r app/ dist
	# TODO: should not copy the source into dist in the first place
	rm dist/styles/main.scss

	# build scss
	sass app/styles/main.scss --style compressed > dist/styles/main.css
	shasum dist/styles/main.css | cut -d' ' -f1

default: prepare_dist_folder
