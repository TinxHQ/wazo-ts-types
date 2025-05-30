#!/bin/bash

# Fix the format of 'Firstname Lastname < number >' strings in confd.ts
sed -i "s/\"Firstname Lastname\" < number >/'Firstname Lastname' < number >/g" ./src/schemas/confd.ts

# Fix specific circular definitions (https://github.com/acacode/swagger-typescript-api/issues/564)
sed -n -E '/export type ([^=]+) = \(\1 & \{/{p;q1}' ./src/schemas/confd.ts

# Check all circular references have been fixed : export type ([^=]+) = \(\1 & \{
sed -i 's/BlocklistNumbersListResponse & {/{/' ./src/schemas/confd.ts
