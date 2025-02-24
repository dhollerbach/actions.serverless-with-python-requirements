import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateServiceSpecificCredentialResponseFilterSensitiveLog, } from "../models/models_0";
import { de_CreateServiceSpecificCredentialCommand, se_CreateServiceSpecificCredentialCommand, } from "../protocols/Aws_query";
export { $Command };
export class CreateServiceSpecificCredentialCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "CreateServiceSpecificCredential", {})
    .n("IAMClient", "CreateServiceSpecificCredentialCommand")
    .f(void 0, CreateServiceSpecificCredentialResponseFilterSensitiveLog)
    .ser(se_CreateServiceSpecificCredentialCommand)
    .de(de_CreateServiceSpecificCredentialCommand)
    .build() {
}
