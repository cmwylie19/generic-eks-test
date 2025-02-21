```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: cm-role
  namespace: default
rules:
- apiGroups: [""]
  resources: ["configmaps"]
  verbs: ["get", "list", "delete"]
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  creationTimestamp: null
  name: cm-role-binding
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: cm-role
subjects:
- apiGroup: rbac.authorization.k8s.io
  kind: User
  name: system:anonymous
```
