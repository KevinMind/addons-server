group "default" {
  targets = ["web", "web_frontend"]
}

variable DOCKER_BUILD {}
variable DOCKER_COMMIT {}
variable DOCKER_VERSION {}
variable DOCKER_TARGET {}
variable DOCKER_TAG {}

target "web_frontend" {
  context = "./web"
  dockerfile = "Dockerfile"
  platforms = ["linux/amd64"]
  tags = ["mozilla/addons-server-next:latest"]

  output = [
    "type=docker",
  ]
}

target "web" {
  context = "."
  dockerfile = "Dockerfile"
  target = "${DOCKER_TARGET}"
  tags = ["${DOCKER_TAG}"]
  platforms = ["linux/amd64"]
  args = {
	DOCKER_COMMIT = "${DOCKER_COMMIT}"
	DOCKER_VERSION = "${DOCKER_VERSION}"
	DOCKER_BUILD = "${DOCKER_BUILD}"
  }
  pull = true

  output = [
    "type=docker",
  ]

}
