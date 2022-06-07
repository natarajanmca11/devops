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
## For Loops

```sh
for <var> in <list>
do
echo i is $i
done

```

:::tip

expression inside `` symbol will execute before the loop begin. Ex.

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
find . -name '*.c'
grep txt    # Find text in result
lsof        # List all port and process names
sed         # Find and replace
wc -l <filename> # get word/line count of the file
test        # Evoluate the epxression. ex. test -f myfile (or) test $x -gt 10
            # Alternatives of test is  [[-gt, -lt]] or ((>, <))
strings 
ps [-ly | -el]
head
tail


```

#### Tail

```sh
tail -2 <filename>      # Get last 2 line of the file
tail -n2 -f <filename>  # Watch/Monitor file changes
```

#### Sed

`/g` in the pattern `'/s/old/new/g` is repleace all the `old` value with `new` value. Otherwise it will replce the first occarance of each line.

    p -> Print
    d -> delete
    G -> Space between line. ex: `sed G f.txt` (or) `sed 'G;G' f.txt`
    s -> substitute
    g -> 
    f -> script file
    e -> script
    i -> extention



```sh
sed 's/old/new/'; 's/demo/prod/'
sed -id 's/old/new/g' file1.txt
sed -d 's/[xX]/Y/' -e 's/b.*n/blue/'
sed -f sedscript -n sed4    # sed scripts file as input
date | sed 's/J/j/'
sed '1,5p'

sed '/alpha/s/beta/gama/'
sed '/apple/,/orange/d'
sed '/important/!s/print/throw_away/'

```
##### File all files with multiple replacements

    find . -type f -name '*.txt' -exec sed -f sedfile {} +
(or)
    
    find . -type f -name '*.txt' -exec sed -f sedfile {} \;


#### awk

```sh

```

:::tip

1. echo $?  # Last process exit status

2. file

3. Add `&` end of the expression will run the bash in background.
4. 

:::