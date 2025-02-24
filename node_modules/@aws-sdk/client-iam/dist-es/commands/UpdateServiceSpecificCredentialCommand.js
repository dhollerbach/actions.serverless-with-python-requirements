import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_UpdateServiceSpecificCredentialCommand, se_UpdateServiceSpecificCredentialCommand, } from "../protocols/Aws_query";
export { $Command };
export class UpdateServiceSpecificCredentialCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "UpdateServiceSpecificCredential", {})
    .n("IAMClient", "UpdateServiceSpecificCredentialCommand")
    .f(void 0, void 0)
    .ser(se_UpdateServiceSpecificCredentialCommand)
    .de(de_UpdateServiceSpecificCredentialCommand)
    .build() {
}
