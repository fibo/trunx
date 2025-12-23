#!/bin/bash

npm run check_types
[ $? -ne 0 ] && exit 1

npm test
[ $? -ne 0 ] && exit 1

EXIT_CODE=0

git diff --name-only --cached | grep -E '\.(js|ts|tsx)$' | while read FILE
do
  [ -f "$FILE" ] || continue
  ./node_modules/.bin/eslint --fix "$FILE"
  [ $? -ne 0 ] && EXIT_CODE=1
  git add "$FILE"
done

exit $EXIT_CODE
