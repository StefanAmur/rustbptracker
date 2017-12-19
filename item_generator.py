import json

def read_rust_item_file(filepath):
	file = open(filepath, 'r')

	lines = []
	for line in file:
		lines.append(line)

	attributes = get_attributes_from_file_lines(lines)

	attributes_string = ''.join(attributes)

	attributes_string = remove_trailing_comma_from_string(attributes_string)

	attributes_dict_string = '{%s}' % attributes_string

	attributes_dict = json.loads(attributes_dict_string)

	print(attributes_dict)

def get_display_name_from_file_lines(lines):
	reading_lines = False
	display_name_attributes = []

	for line in lines:
		if line.strip().startswith('"displayName"'):
			reading_lines = True

		if reading_lines:
			display_name_attributes.append(line)

		if line.strip().endswith('},'):
			break

	display_name_attributes = [line.strip() for line in display_name_attributes]
	display_name = ''.join(display_name_attributes)
	return display_name

def get_attributes_from_file_lines(lines):
	display_name = get_display_name_from_file_lines(lines)
	default_blueprint = get_default_blueprint_from_file_lines(lines)
	workbench_level = get_workbench_level_from_file_lines(lines)

	attributes = [display_name, default_blueprint, workbench_level]

	return attributes

def get_default_blueprint_from_file_lines(lines):
	for line in lines:
		if line.strip().startswith('"defaultBlueprint"'):
			return line.strip()

def get_workbench_level_from_file_lines(lines):
	for line in lines:
		if line.strip().startswith('"workbenchLevelRequired"'):
			return line.strip()

def generate_attibutes_object_from_list(attributes):
	attributes_string = ','.join(attributes)
	
	return ast.literal_eval(attributes_string)

def remove_trailing_comma_from_string(string):
	list_of_strings = string.rsplit(',', 1)
	return ' '.join(list_of_strings)
