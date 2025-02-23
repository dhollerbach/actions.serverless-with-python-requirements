import { checkExceptions, createWaiter, WaiterState } from "@smithy/util-waiter";
import { GetInstanceProfileCommand } from "../commands/GetInstanceProfileCommand";
const checkState = async (client, input) => {
    let reason;
    try {
        const result = await client.send(new GetInstanceProfileCommand(input));
        reason = result;
        return { state: WaiterState.SUCCESS, reason };
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "NoSuchEntityException") {
            return { state: WaiterState.RETRY, reason };
        }
    }
    return { state: WaiterState.RETRY, reason };
};
export const waitForInstanceProfileExists = async (params, input) => {
    const serviceDefaults = { minDelay: 1, maxDelay: 120 };
    return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
export const waitUntilInstanceProfileExists = async (params, input) => {
    const serviceDefaults = { minDelay: 1, maxDelay: 120 };
    const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return checkExceptions(result);
};
