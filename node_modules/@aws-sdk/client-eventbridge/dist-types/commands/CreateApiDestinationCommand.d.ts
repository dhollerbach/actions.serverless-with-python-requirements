import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { CreateApiDestinationRequest, CreateApiDestinationResponse } from "../models/models_0";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateApiDestinationCommand}.
 */
export interface CreateApiDestinationCommandInput extends CreateApiDestinationRequest {
}
/**
 * @public
 *
 * The output of {@link CreateApiDestinationCommand}.
 */
export interface CreateApiDestinationCommandOutput extends CreateApiDestinationResponse, __MetadataBearer {
}
declare const CreateApiDestinationCommand_base: {
    new (input: CreateApiDestinationCommandInput): import("@smithy/smithy-client").CommandImpl<CreateApiDestinationCommandInput, CreateApiDestinationCommandOutput, EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (__0_0: CreateApiDestinationCommandInput): import("@smithy/smithy-client").CommandImpl<CreateApiDestinationCommandInput, CreateApiDestinationCommandOutput, EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Creates an API destination, which is an HTTP invocation endpoint configured as a target
 *       for events.</p>
 *          <p>API destinations do not support private destinations, such as interface VPC
 *       endpoints.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-api-destinations.html">API destinations</a> in the
 *         <i>EventBridge User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, CreateApiDestinationCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, CreateApiDestinationCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const input = { // CreateApiDestinationRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ConnectionArn: "STRING_VALUE", // required
 *   InvocationEndpoint: "STRING_VALUE", // required
 *   HttpMethod: "POST" || "GET" || "HEAD" || "OPTIONS" || "PUT" || "PATCH" || "DELETE", // required
 *   InvocationRateLimitPerSecond: Number("int"),
 * };
 * const command = new CreateApiDestinationCommand(input);
 * const response = await client.send(command);
 * // { // CreateApiDestinationResponse
 * //   ApiDestinationArn: "STRING_VALUE",
 * //   ApiDestinationState: "ACTIVE" || "INACTIVE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateApiDestinationCommandInput - {@link CreateApiDestinationCommandInput}
 * @returns {@link CreateApiDestinationCommandOutput}
 * @see {@link CreateApiDestinationCommandInput} for command's `input` shape.
 * @see {@link CreateApiDestinationCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request failed because it attempted to create resource beyond the allowed service
 *       quota.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource you are trying to create already exists.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link EventBridgeServiceException}
 * <p>Base exception class for all service exceptions from EventBridge service.</p>
 *
 * @public
 */
export declare class CreateApiDestinationCommand extends CreateApiDestinationCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: CreateApiDestinationRequest;
            output: CreateApiDestinationResponse;
        };
        sdk: {
            input: CreateApiDestinationCommandInput;
            output: CreateApiDestinationCommandOutput;
        };
    };
}
