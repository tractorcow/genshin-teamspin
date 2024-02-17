default: help
nvm:
	. ${NVM_DIR}/nvm.sh && nvm use && $(CMD)
install: ## Install dependencies
	make nvm CMD="npm update -g npm"
	make nvm CMD="npm install"
update: ## Update dependencies
	make nvm CMD="npm upgrade"
watch:
	make nvm CMD="npm run start"
help: ## Display a list of commands
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sed 's/makefile://g' | awk 'BEGIN {FS = ":[^:]*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
