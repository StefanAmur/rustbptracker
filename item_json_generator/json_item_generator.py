import glob
import os
import json

from item_json_generator.file_reader import read_rust_item_file

def read_all_files_from_items_folder():
	all_item_attribues = []
	item_files_path  = os.path.join(os.path.dirname(__file__), os.pardir, 'items/' '*.txt')
	print(item_files_path)
	item_files = glob.glob(item_files_path)
	for file in item_files:
		file_attributes = read_rust_item_file(file)
		if file_attributes:
			all_item_attribues.append(file_attributes)

	return all_item_attribues

def write_item_attributes_to_json_file():
	all_item_attribues = read_all_files_from_items_folder()
	with open('items.txt', 'w') as outfile:
		json.dump(all_item_attribues, outfile)
