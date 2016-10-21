# ad-products

## Introduction
The repository contains code for front-end of QuizTime project.

## Contents
1. [Current status](#current-status)
2. [Contributing](#contributing)
3. [Deployments](#deployments)
4. [Functional test setup](#functional-test-setup)

## Current status
Check [dev](http://54.174.71.85:8080) or [staging](adproducts-stage.us-east-1.elasticbeanstalk.com). In case, any URL is not working, please check below for deployment instructions.

## Contributing
#### Add following text editor settings to your sublime 3 > `Preferences` > `Settings - User`
````
{
	"binary_file_patterns":
	[
		"*.map",
		"*.min.js",
		"bundle.js"
	],
	"bold_folder_labels": true,
	"caret_style": "phase",
	"default_line_ending": "unix",
	"draw_white_space": "all",
	"ensure_newline_at_eof_on_save": true,
	"fallback_encoding": "UTF-8",
	"find_selected_text": true,
	"folder_exclude_patterns":
	[
		".svn",
		".git",
		"files",
		".sass-cache",
		"m",
		"node_modules",
		".ebextensions",
		"reports"
	],
	"font_size": 15,
	"highlight_line": true,
	"ignored_packages":
	[
		"Markdown",
		"Vintage"
	],
	"line_padding_bottom": 1,
	"open_files_in_new_window": false,
	"rulers":
	[
		80
	],
	"scroll_past_end": true,
	"shift_tab_unindent": true,
	"tab_size": 2,
	"translate_tabs_to_spaces": true,
	"trim_automatic_white_space": true,
	"trim_trailing_white_space_on_save": true,
	"use_tab_stops": true,
	"word_separators": "./\\()\"'-:,.;<>~!@#%^&*|+=[]{}`~?"
}
````
####Do the local setup using following steps in sequence and open http://localhost:8080

````
git clone https://github.com/TimeInc/ad-products.git
cd ad-products
npm --strict-ssl=false install
npm run dev
````

## Deployments
#### Dev Environment deployment steps
````
ssh -i ~/.ssh/id_rsa pragati@54.83.147.14

cd deploy

git clone --depth 1 --branch develop https://github.com/TimeInc/ad-products.git ad-products-2016-<DATE-TIME>-develop
Example: git clone --depth 1 --branch develop https://github.com/TimeInc/ad-products.git ad-products-2016-09-09-1700-develop

cd ad-products-2016-<DATE-TIME>-develop

npm i
npm run build
cd ..
nano pm2-processes-jen-wong.json

CHANGE NAME AND CWD TO ad-products-2016-<DATE-TIME>-develop

./node_modules/.bin/pm2 stop all
./node_modules/.bin/pm2 delete all
./node_modules/.bin/pm2 start pm2-processes-jen-wong.json
./node_modules/.bin/pm2 list
./node_modules/.bin/pm2 show 0
./node_modules/.bin/pm2 logs 0
./node_modules/.bin/pm2 monit
````
#### Staging Environment deployment steps
- `git checkout staging`
- `npm run build`
- Create zip of root folder with `zip -x "*.zip" -x ".git*" -x ".gitignore" -x "node_modules*" -x "__MACOSX" -x "*.DS_Store" -r adproducts_staging_$(date +"%Y-%m-%d_%H-%M-%S").zip .`
- Upload at [elastic beanstalk](https://timeinc-ape-test.signin.aws.amazon.com/console)

#### Production Environment deployment steps
- Create zip of root folder with `zip -x "*.zip" -x ".git*" -x ".gitignore" -x "node_modules*" -x "__MACOSX" -x "*.DS_Store" -r adproducts_master_$(date +"%Y-%m-%d_%H-%M-%S").zip .`
- Upload at [elastic beanstalk](https://443035246399.signin.aws.amazon.com/console)

## Functional test setup
TODO from Harshitha
