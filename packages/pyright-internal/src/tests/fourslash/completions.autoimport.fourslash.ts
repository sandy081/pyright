/// <reference path="fourslash.ts" />

// @filename: test1.py
//// Test[|/*marker*/|]

// @filename: test2.py
//// class Test:
////     pass

// @ts-ignore
await helper.verifyCompletion('included', {
    marker: {
        completions: [
            {
                label: 'Test',
                documentation: {
                    kind: 'markdown',
                    value: 'Auto-import\n\n```\nfrom test2 import Test\n```',
                },
            },
        ],
    },
});
