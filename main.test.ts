import {
  jest,
  beforeAll,
  test,
  expect,
  describe,
  afterAll,
} from "@jest/globals";
import { K8s, kind } from "kubernetes-fluent-client";
describe("main", () => {
  beforeAll(async () => {
    await K8s(kind.ConfigMap).Apply({
      metadata: {
        name: "demo",
        namespace: "default",
      },
      data: {
        uid: "e4b1b3b1-0b1b-4b1b-8b1b-2b1b1b1b1b1b1",
      },
    });
  });

  afterAll(async () => {
    await K8s(kind.ConfigMap).InNamespace("default").Delete("demo");
  });
  it("gets cm in default namespace", async () => {
    const cm = await K8s(kind.ConfigMap).InNamespace("default").Get("demo");
    expect(cm.metadata!.name).toBe("demo");
    expect(cm.data!.uid).toBe("e4b1b3b1-0b1b-4b1b-8b1b-2b1b1b1b1b1b1");
  });
});
