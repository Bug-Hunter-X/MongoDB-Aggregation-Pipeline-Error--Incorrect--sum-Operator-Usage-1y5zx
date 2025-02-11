# MongoDB Aggregation Pipeline Error: Incorrect $sum Operator Usage

This repository demonstrates a common error in MongoDB aggregation pipelines: incorrect usage of the `$sum` operator within the `$group` stage.

## Problem

The provided code snippet attempts to group documents by a field and sum another field for each group.  However, it uses the `$sum` operator incorrectly, leading to an unexpected result or an error.

## Solution

The solution corrects the usage of the `$sum` operator. The operator needs to reference the field correctly within the document to accurately calculate the sum.