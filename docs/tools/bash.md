---
slug: bash
title: Bash
# authors: [natarajan]
tags: [bash]
sidebar_position: 10
---

## Docs

```sh 
man bash
info bash
```

## Bash Script file
```sh title="Common usage"
#!/bin/bash
```
(or)
```sh
#!/usr/bin/env bash
```

## Execute

```sh
chmod +x script.sh
./script.sh
```

## Variables

### Declare variable
```sh
variableName="value"
export variableName2="value2"
declare -x variableName3="value3"
```

### Access the variable
```sh
echo $variableName
echo $variableName2
echo $variableName3
```

## Grouping
```sh
() -> scope clear
{} -> scope extend
```

## Bash Startup

```sh
.bash_profile # read when bash is invoked as login shell
.bashrc # executed when new shell is started

```
## Typeset
```sh
typeset -i x # x must be an integer

# Types
-i -> Integer

```

## Declare
```sh
declare -a ArrayVariable

# Options
-l -> To lowercase
-u -> To uppercase
-r -> Read only
-a -> To indexed array

```

## While Loop
```sh
while 
    command list 1
do
    command list
done
# loops while command list 1 succeeds


while 
    read a b
do
    echo a is $a b is $b
done <data_file
```
## FOr Loops

```sh
for <var> in <list>
do
echo i is $i
done

```

:::tip

```sh
for num in `seq 1 5`
do
echo num is $num
done
```
:::

## Case Statement
```sh
case expression in
pattern 1| pattern 3)
    command list;;
pattern 2)
    command list;;
esac
```

## If Statement

```sh
if 
command list
then
command list
else
command list
fi
```

## Bash Commands

```sh
time find / -name core
source script.sh 
#(or) 
. script.sh
alias ll="ls -l"
unalias ll
read a b <data_file
(or)
read a b c d
seq 1 5
find . -name *.c
grep txt    # Find text in result
lsof        # List all port and process names
sed         # Find and replace
wc -l <filename> # get line count of the file
test        # Evoluate the epxression. ex. test -f myfile (or) test $x -gt 10
            # Alternatives of test is  [[-gt, -lt]] or ((>, <))
strings 
ps -ly





```


:::tip
```sh
echo $?  # Last process exit status
file
```
:::