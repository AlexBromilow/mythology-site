export const root = true;
export const overrides = [
    {
        files: ['*.ts', '*.tsx'],
        processor: '@graphql-eslint/graphql',
        parser: "@typescript-eslint/parser",
        extends: [
            "eslint:recommended",
            "plugin:@typescript-eslint/recommended"
        ],
        env: {
            es6: true,
        },
    },
    {
        files: ['*.graphql'],
        parser: '@graphql-eslint/eslint-plugin',
        plugins: ['@graphql-eslint'],
        rules: {
            '@graphql-eslint/no-anonymous-operations': 'error',
            '@graphql-eslint/naming-convention': [
                'error',
                {
                    OperationDefinition: {
                        style: 'PascalCase',
                        forbiddenPrefixes: ['Query', 'Mutation', 'Subscription', 'Get'],
                        forbiddenSuffixes: ['Query', 'Mutation', 'Subscription'],
                    },
                },
            ],
        },
    },
];
export const extends = ['plugin:storybook/recommended'];