.PHONY:	build

build:
	sam build --use-container
deploy:
	sam build --use-container && sam deploy --guided
deploy-infra:
	sam build && aws-vault exec NAME--no-session -- sam deploy
deploy-site:
	aws-vault exec NAME --no-session -- aws s3 sync ./resume s3://my-cloud-resume-challenge
