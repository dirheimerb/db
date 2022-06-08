#!/usr/bin/env node
import { Command, Option } from 'commander';

const program = new Command();

program.name('fastifly-api').version('0.0.1').command('install [fastifly-api]');

program.addOption(
	new Option('-a, --apiKey <string>', 'Add Api Key to access Bin').env(
		'API_KEY'
	)
);

program
	.command('build')
	.description('Build API')
	.action(() => {
		console.log('build');
	});
program
	.command('build:watch')
	.description('Build API and watch changes')
	.action(() => {
		console.log('Build Watch');
	});
program
	.command('lint')
	.description('lint API Source Files')
	.action(() => {
		console.log('Lint Source Files');
	});
program
	.command('connect')
	.description('Connect to DB and get initial DB JSON File')
	.action(() => {
		console.log('Connect');
	});
program
	.command('update')
	.description('Update DB with JSON File')
	.action(() => {
		console.log('Update');
	});
program
	.command('read')
	.description('Read the DB and check for Data mismatch')
	.action(() => {
		console.log('Read');
	});

program.parse(process.argv);

const options = program.opts();
if (options.debug) console.log(options);
