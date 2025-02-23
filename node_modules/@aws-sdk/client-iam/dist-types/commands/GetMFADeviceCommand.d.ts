import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetMFADeviceRequest, GetMFADeviceResponse } from "../models/models_0";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMFADeviceCommand}.
 */
export interface GetMFADeviceCommandInput extends GetMFADeviceRequest {
}
/**
 * @public
 *
 * The output of {@link GetMFADeviceCommand}.
 */
export interface GetMFADeviceCommandOutput extends GetMFADeviceResponse, __MetadataBearer {
}
declare const GetMFADeviceCommand_base: {
    new (input: GetMFADeviceCommandInput): import("@smithy/smithy-client").CommandImpl<GetMFADeviceCommandInput, GetMFADeviceCommandOutput, IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (__0_0: GetMFADeviceCommandInput): import("@smithy/smithy-client").CommandImpl<GetMFADeviceCommandInput, GetMFADeviceCommandOutput, IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Retrieves information about an MFA device for a specified user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetMFADeviceCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetMFADeviceCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // GetMFADeviceRequest
 *   SerialNumber: "STRING_VALUE", // required
 *   UserName: "STRING_VALUE",
 * };
 * const command = new GetMFADeviceCommand(input);
 * const response = await client.send(command);
 * // { // GetMFADeviceResponse
 * //   UserName: "STRING_VALUE",
 * //   SerialNumber: "STRING_VALUE", // required
 * //   EnableDate: new Date("TIMESTAMP"),
 * //   Certifications: { // CertificationMapType
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMFADeviceCommandInput - {@link GetMFADeviceCommandInput}
 * @returns {@link GetMFADeviceCommandOutput}
 * @see {@link GetMFADeviceCommandInput} for command's `input` shape.
 * @see {@link GetMFADeviceCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @public
 */
export declare class GetMFADeviceCommand extends GetMFADeviceCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: GetMFADeviceRequest;
            output: GetMFADeviceResponse;
        };
        sdk: {
            input: GetMFADeviceCommandInput;
            output: GetMFADeviceCommandOutput;
        };
    };
}
