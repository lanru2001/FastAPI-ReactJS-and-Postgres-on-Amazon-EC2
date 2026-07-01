variable "region" {
  default = "us-east-1"
}

variable "ami" {
  # Ubuntu 22.04 in us-east-1
  default = "ami-053b0d53c279acc90"
}

variable "instance_type" {
  default = "t2.micro"
}

variable "key_name" {
  description = "Your AWS EC2 Key Pair name"
}
