/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ExecBody = {
    /**
     * Bash command to execute (e.g. 'cat /file.py', 'grep -rn pattern .')
     */
    command: string;
    /**
     * Working directory for relative paths
     */
    cwd?: string;
};

