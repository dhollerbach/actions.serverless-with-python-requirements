import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetUserRequest, GetUserResponse } from "../models/models_0";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetUserCommand}.
 */
export interface GetUserCommandInput extends GetUserRequest {
}
/**
 * @public
 *
 * The output of {@link GetUserCommand}.
 */
export interface GetUserCommandOutput extends GetUserResponse, __MetadataBearer {
}
declare const GetUserCommand_base: {
    new (input: GetUserCommandInput): import("@smithy/smithy-client").CommandImpl<GetUserCommandInput, GetUserCommandOutput, IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (...[input]: [] | [GetUserCommandInput]): import("@smithy/smithy-client").CommandImpl<GetUserCommandInput, GetUserCommandOutput, IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Retrieves information about the specified IAM user, including the user's creation
 *             date, path, unique ID, and ARN.</p>
 *          <p>If you do not specify a user name, IAM determines the user name implicitly based on
 *             the Amazon Web Services access key ID used to sign the request to this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetUserCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetUserCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // GetUserRequest
 *   UserName: "STRING_VALUE",
 * };
 * const command = new GetUserCommand(input);
 * const response = await client.send(command);
 * // { // GetUserResponse
 * //   User: { // User
 * //     Path: "STRING_VALUE", // required
 * //     UserName: "STRING_VALUE", // required
 * //     UserId: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE", // required
 * //     CreateDate: new Date("TIMESTAMP"), // required
 * //     PasswordLastUsed: new Date("TIMESTAMP"),
 * //     PermissionsBoundary: { // AttachedPermissionsBoundary
 * //       PermissionsBoundaryType: "PermissionsBoundaryPolicy",
 * //       PermissionsBoundaryArn: "STRING_VALUE",
 * //     },
 * //     Tags: [ // tagListType
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetUserCommandInput - {@link GetUserCommandInput}
 * @returns {@link GetUserCommandOutput}
 * @see {@link GetUserCommandInput} for command's `input` shape.
 * @see {@link GetUserCommandOutput} for command's `response` shape.
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
 * @example To get information about an IAM user
 * ```javascript
 * // The following command gets information about the IAM user named Bob.
 * const input = {
 *   "UserName": "Bob"
 * };
 * const command = new GetUserCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "User": {
 *     "Arn": "arn:aws:iam::123456789012:user/Bob",
 *     "CreateDate": "2012-09-21T23:03:13Z",
 *     "Path": "/",
 *     "UserId": "AKIAIOSFODNN7EXAMPLE",
 *     "UserName": "Bob"
 *   }
 * }
 * *\/
 * // example id: ede000a1-9e4c-40db-bd0a-d4f95e41a6ab
 * ```
 *
 */
export declare class GetUserCommand extends GetUserCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: GetUserRequest;
            output: GetUserResponse;
        };
        sdk: {
            input: GetUserCommandInput;
            output: GetUserCommandOutput;
        };
    };
}
