import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteServiceSpecificCredentialRequest } from "../models/models_0";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteServiceSpecificCredentialCommand}.
 */
export interface DeleteServiceSpecificCredentialCommandInput extends DeleteServiceSpecificCredentialRequest {
}
/**
 * @public
 *
 * The output of {@link DeleteServiceSpecificCredentialCommand}.
 */
export interface DeleteServiceSpecificCredentialCommandOutput extends __MetadataBearer {
}
declare const DeleteServiceSpecificCredentialCommand_base: {
    new (input: DeleteServiceSpecificCredentialCommandInput): import("@smithy/smithy-client").CommandImpl<DeleteServiceSpecificCredentialCommandInput, DeleteServiceSpecificCredentialCommandOutput, IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (__0_0: DeleteServiceSpecificCredentialCommandInput): import("@smithy/smithy-client").CommandImpl<DeleteServiceSpecificCredentialCommandInput, DeleteServiceSpecificCredentialCommandOutput, IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Deletes the specified service-specific credential.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteServiceSpecificCredentialCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteServiceSpecificCredentialCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // DeleteServiceSpecificCredentialRequest
 *   UserName: "STRING_VALUE",
 *   ServiceSpecificCredentialId: "STRING_VALUE", // required
 * };
 * const command = new DeleteServiceSpecificCredentialCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteServiceSpecificCredentialCommandInput - {@link DeleteServiceSpecificCredentialCommandInput}
 * @returns {@link DeleteServiceSpecificCredentialCommandOutput}
 * @see {@link DeleteServiceSpecificCredentialCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceSpecificCredentialCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @public
 */
export declare class DeleteServiceSpecificCredentialCommand extends DeleteServiceSpecificCredentialCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: DeleteServiceSpecificCredentialRequest;
            output: {};
        };
        sdk: {
            input: DeleteServiceSpecificCredentialCommandInput;
            output: DeleteServiceSpecificCredentialCommandOutput;
        };
    };
}
