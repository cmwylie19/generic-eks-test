# Generic EKS Test

This repo contains a test for a [Kubernetes Fluent Client](https://github.com/defenseunicorns/kubernetes-fluent-client) implementation for AWS EKS.

To use:
- update the kubeconfig to your EKS cluster
- run `npm install`
- run `npm test`


```bash
 > npm test 

> generic-eks-test@1.0.0 test
> npx jest main.test.ts

(node:93549) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
 PASS  ./main.test.ts
  main
    ✓ gets cm in default namespace (159 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.7 s, estimated 2 s
Ran all test suites matching /main.test.ts/i.
```
