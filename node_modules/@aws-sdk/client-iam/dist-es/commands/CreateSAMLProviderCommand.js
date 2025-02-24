import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSAMLProviderRequestFilterSensitiveLog, } from "../models/models_0";
import { de_CreateSAMLProviderCommand, se_CreateSAMLProviderCommand } from "../protocols/Aws_query";
export { $Command };
export class CreateSAMLProviderCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "CreateSAMLProvider", {})
    .n("IAMClient", "CreateSAMLProviderCommand")
    .f(CreateSAMLProviderRequestFilterSensitiveLog, void 0)
    .ser(se_CreateSAMLProviderCommand)
    .de(de_CreateSAMLProviderCommand)
    .build() {
}
