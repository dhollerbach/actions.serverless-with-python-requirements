import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateSAMLProviderRequestFilterSensitiveLog, } from "../models/models_1";
import { de_UpdateSAMLProviderCommand, se_UpdateSAMLProviderCommand } from "../protocols/Aws_query";
export { $Command };
export class UpdateSAMLProviderCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "UpdateSAMLProvider", {})
    .n("IAMClient", "UpdateSAMLProviderCommand")
    .f(UpdateSAMLProviderRequestFilterSensitiveLog, void 0)
    .ser(se_UpdateSAMLProviderCommand)
    .de(de_UpdateSAMLProviderCommand)
    .build() {
}
