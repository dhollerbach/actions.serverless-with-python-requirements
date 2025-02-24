import { checkExceptions, createWaiter, WaiterState } from "@smithy/util-waiter";
import { DescribeStackRefactorCommand, } from "../commands/DescribeStackRefactorCommand";
const checkState = async (client, input) => {
    let reason;
    try {
        const result = await client.send(new DescribeStackRefactorCommand(input));
        reason = result;
        try {
            const returnComparator = () => {
                return result.ExecutionStatus;
            };
            if (returnComparator() === "EXECUTE_COMPLETE") {
                return { state: WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.ExecutionStatus;
            };
            if (returnComparator() === "EXECUTE_FAILED") {
                return { state: WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.ExecutionStatus;
            };
            if (returnComparator() === "ROLLBACK_COMPLETE") {
                return { state: WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "ValidationError") {
            return { state: WaiterState.FAILURE, reason };
        }
    }
    return { state: WaiterState.RETRY, reason };
};
export const waitForStackRefactorExecuteComplete = async (params, input) => {
    const serviceDefaults = { minDelay: 15, maxDelay: 120 };
    return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
export const waitUntilStackRefactorExecuteComplete = async (params, input) => {
    const serviceDefaults = { minDelay: 15, maxDelay: 120 };
    const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return checkExceptions(result);
};
