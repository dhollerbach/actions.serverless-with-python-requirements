import { HttpRequest } from "@smithy/protocol-http";
export function acceptHeaderMiddleware() {
    return (next) => async (args) => {
        const { request } = args;
        if (HttpRequest.isInstance(request)) {
            if (request.headers?.accept === undefined) {
                request.headers.accept = "application/json";
            }
        }
        return next({
            ...args,
            request,
        });
    };
}
export const acceptHeaderMiddlewareOptions = {
    step: "build",
    tags: ["SET_ACCEPT_HEADER", "ACCEPT_HEADER"],
    name: "acceptHeaderMiddleware",
    override: true,
};
export const getAcceptHeaderPlugin = (unused) => ({
    applyToStack: (clientStack) => {
        clientStack.add(acceptHeaderMiddleware(), acceptHeaderMiddlewareOptions);
    },
});
