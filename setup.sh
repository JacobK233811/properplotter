# Install pyenv
brew install pyenv
# Add output for your shell
pyenv init
# Install python 3.9
pyenv install 3.9

# Install poetry
brew install poetry
# Read the output to add completions to your shell
poetry help completions

# To run scripts you'll need to run
poetry run python manage.py

## React
# install node version manager nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.1/install.sh | bash

# install latest node version (should be 14)
nvm install --lts

# install package manager yarn
brew install yarn