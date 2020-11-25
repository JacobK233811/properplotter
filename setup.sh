# Install pyenv to manage python versions
brew install pyenv
# Read the output to add pyenv to your shell
pyenv init
# Install python 3.8
pyenv install 3.9

# Install poetry to manage python dependencies
brew install poetry
# Read the output to add completions to your shell
poetry help completions

# To run scripts you'll need to run
poetry run python manage.py