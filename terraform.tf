variable "aws_access_key" {}
variable "aws_secret_key" {}

provider "aws" {
  access_key = "${var.aws_access_key}"
  secret_key = "${var.aws_secret_key}"
  region     = "eu-central-1"
}

variable "dnsimple_token" {}
variable "dnsimple_email" {}

provider "dnsimple" {
  token = "${var.dnsimple_token}"
  email = "${var.dnsimple_email}"
}

resource "aws_s3_bucket" "www_trifork_se" {
  bucket = "www.trifork.se"
  acl    = "public-read"
  policy = "${file("policy.json")}"

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}

resource "dnsimple_record" "www_trifork_se" {
  domain = "trifork.se"
  name   = "www"
  value  = "${aws_s3_bucket.www_trifork_se.website_endpoint}"
  type   = "CNAME"
  ttl    = 3600
}

resource "dnsimple_record" "trifork_se" {
  domain = "trifork.se"
  name   = ""
  value  = "www.trifork.se"
  type   = "URL"
  ttl    = 3600
}
