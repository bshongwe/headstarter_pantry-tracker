#!/bin/bash

# Define required packages and their versions
REQUIRED_PACKAGES=(
  "eslint@8.15.0"
  "eslint-config-next@12.2.0"
  "@emotion/react@11.9.3"
  "@emotion/styled@11.9.3"
  "@mui/icons-material@5.8.4"
  "@mui/material@5.8.4"
  "firebase@9.6.10"
  "next@12.2.0"
  "react@18.0.0"
  "react-dom@18.0.0"
)

echo "Checking if required packages are installed..."

# Function to install or update a package
install_package() {
  PACKAGE=$1
  echo "Installing $PACKAGE..."
  npm install $PACKAGE
}

# Check for each required package
for PACKAGE in "${REQUIRED_PACKAGES[@]}"; do
  PACKAGE_NAME=$(echo $PACKAGE | cut -d'@' -f1)
  PACKAGE_VERSION=$(echo $PACKAGE | cut -d'@' -f2)

  INSTALLED_VERSION=$(npm list $PACKAGE_NAME --depth=0 2>/dev/null | grep $PACKAGE_NAME | awk -F'@' '{print $2}')

  if [ "$INSTALLED_VERSION" == "$PACKAGE_VERSION" ]; then
    echo "$PACKAGE_NAME@$PACKAGE_VERSION is installed."
  else
    if [ -z "$INSTALLED_VERSION" ]; then
      echo "$PACKAGE_NAME@$PACKAGE_VERSION is not installed."
    else
      echo "$PACKAGE_NAME@$PACKAGE_VERSION is installed, but the required version is $PACKAGE_VERSION. Installed version: $INSTALLED_VERSION"
    fi
    install_package $PACKAGE
  fi
done

echo "All required packages are properly installed or updated."

