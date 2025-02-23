import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { DescribeEndpointRequest, DescribeEndpointResponse } from "../models/models_0";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEndpointCommand}.
 */
export interface DescribeEndpointCommandInput extends DescribeEndpointRequest {
}
/**
 * @public
 *
 * The output of {@link DescribeEndpointCommand}.
 */
export interface DescribeEndpointCommandOutput extends DescribeEndpointResponse, __MetadataBearer {
}
declare const DescribeEndpointCommand_base: {
    new (input: DescribeEndpointCommandInput): import("@smithy/smithy-client").CommandImpl<DescribeEndpointCommandInput, DescribeEndpointCommandOutput, EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (__0_0: DescribeEndpointCommandInput): import("@smithy/smithy-client").CommandImpl<DescribeEndpointCommandInput, DescribeEndpointCommandOutput, EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Get the information about an existing global endpoint. For more information about global
 *       endpoints, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-global-endpoints.html">Making applications
 *         Regional-fault tolerant with global endpoints and event replication</a> in the
 *         <i>
 *                <i>Amazon EventBridge User Guide</i>
 *             </i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, DescribeEndpointCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, DescribeEndpointCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const input = { // DescribeEndpointRequest
 *   Name: "STRING_VALUE", // required
 *   HomeRegion: "STRING_VALUE",
 * };
 * const command = new DescribeEndpointCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEndpointResponse
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   RoutingConfig: { // RoutingConfig
 * //     FailoverConfig: { // FailoverConfig
 * //       Primary: { // Primary
 * //         HealthCheck: "STRING_VALUE", // required
 * //       },
 * //       Secondary: { // Secondary
 * //         Route: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   },
 * //   ReplicationConfig: { // ReplicationConfig
 * //     State: "ENABLED" || "DISABLED",
 * //   },
 * //   EventBuses: [ // EndpointEventBusList
 * //     { // EndpointEventBus
 * //       EventBusArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   RoleArn: "STRING_VALUE",
 * //   EndpointId: "STRING_VALUE",
 * //   EndpointUrl: "STRING_VALUE",
 * //   State: "ACTIVE" || "CREATING" || "UPDATING" || "DELETING" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETE_FAILED",
 * //   StateReason: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeEndpointCommandInput - {@link DescribeEndpointCommandInput}
 * @returns {@link DescribeEndpointCommandOutput}
 * @see {@link DescribeEndpointCommandInput} for command's `input` shape.
 * @see {@link DescribeEndpointCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link EventBridgeServiceException}
 * <p>Base exception class for all service exceptions from EventBridge service.</p>
 *
 * @public
 */
export declare class DescribeEndpointCommand extends DescribeEndpointCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: DescribeEndpointRequest;
            output: DescribeEndpointResponse;
        };
        sdk: {
            input: DescribeEndpointCommandInput;
            output: DescribeEndpointCommandOutput;
        };
    };
}
