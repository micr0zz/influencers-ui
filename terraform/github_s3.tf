resource "aws_s3_bucket" "react_app_bucket" {
  bucket = "react-app-bucket-pmi"

  tags               = local.common_tags
}

resource "aws_s3_bucket_website_configuration" "react_app_bucket_website" {
  bucket = aws_s3_bucket.react_app_bucket.bucket

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}


resource "aws_s3_bucket_public_access_block" "react_app_bucket_public_access_block" {
  bucket = aws_s3_bucket.react_app_bucket.id
  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}
resource "aws_s3_bucket_policy" "react_app_bucket_policy" {
  bucket = aws_s3_bucket.react_app_bucket.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Principal = "*",
        Action = "s3:GetObject",
        Resource = "${aws_s3_bucket.react_app_bucket.arn}/*"
      }
    ]
  })
}



resource "aws_iam_policy" "s3_access" {
  name = "s3-access-policy"

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Action = [
          "s3:ListBucket",
          "s3:GetObject",
          "s3:PutObject"
        ],
        Resource = [
          "arn:aws:s3:::react-app-bucket-pmi",
          "arn:aws:s3:::react-app-bucket-pmi/*"
        ]
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "attach_s3_access" {
  role       = aws_iam_role.github_actions.name
  policy_arn = aws_iam_policy.s3_access.arn
}
