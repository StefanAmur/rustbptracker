import glob
import os

from item_json_generator.file_reader import read_rust_item_file

def read_all_files_from_items_folder():
	item_files_path  = os.path.join(os.path.dirname(__file__), os.pardir, 'items/' '*.txt')
	print(item_files_path)
	item_files = glob.glob(item_files_path)
	for file in item_files:
		file_attributes = read_rust_item_file(file)
		print(file_attributes)
