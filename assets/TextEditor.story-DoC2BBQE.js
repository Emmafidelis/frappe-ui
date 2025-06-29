import { ay as defineComponent, az as ref, aA as resolveComponent, aB as openBlock, aC as createBlock, aD as withCtx, aT as EditorContent, aE as createVNode, aF as createBaseVNode, aM as createTextVNode } from "./vendor-Bp27nGZy.js";
import { T as TextEditor, g as TextEditorFixedMenu } from "./ListRow-D4kWPlmG.js";
import { _ as __unplugin_components_0 } from "./Button-ChnItE51.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./Checkbox-B9EoYKHb.js";
import "./Autocomplete-MfVTAODs.js";
import "./Popover-CkTBhiFo.js";
import "./FeatherIcon-B8S54-17.js";
import "./Avatar-CMCUuHOk.js";
import "./Badge-CH9hezh8.js";
import "./Breadcrumbs-CTPvZAns.js";
import "./Dropdown-De26NPXB.js";
import "./Combobox-CVFWcVw8.js";
import "./DateRangePicker-COhkNcWn.js";
import "./TextInput-BHqGkgye.js";
import "./debounce-CRCtzhPg.js";
import "./dayjs-DwOLYGCP.js";
import "./Dialog-CRtP_747.js";
import "./ErrorMessage-B6eYCJwB.js";
import "./FileUploader-BmmTAjTr.js";
import "./FormControl--z1y_T3x.js";
import "./Select-r0JfZkex.js";
import "./Textarea-CA0HsMNj.js";
import "./Progress-C_9TWUf6.js";
import "./Rating-CKM_y_sn.js";
import "./Spinner-CGD1Xvs_.js";
import "./Switch-DqM0IYjC.js";
import "./TabButtons-CNI0WYVW.js";
import "./Tabs-JynOTat7.js";
import "./Tooltip-EWh_pbxI.js";
import "./Calendar-DCmyM2M4.js";
import "./CircularProgressBar-D3b8hEc3.js";
import "./Tree-B2DspSCo.js";
import "./NumberChart-C1FZ7LXe.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TextEditor.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const value = ref(`
<div>
  <h2>Heading 2</h2>
  <p>
    This is a paragraph with <strong>bold</strong> and <em>italic</em> text.
  </p>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
  <p>
    <a href="https://frappe.io">Frappe</a>
  </p>
  <pre><code class="language-javascript">import { Button } from 'frappe-ui'
const value = ref(true);</code>
  </pre>
</div>
`);
    const customValue = ref("");
    const customButtons = [
      "Paragraph",
      ["Heading 2", "Heading 3", "Heading 4"],
      "Separator",
      "Bold",
      "Italic",
      "Separator",
      "Bullet List",
      "Numbered List",
      "Separator",
      "Link",
      "Image"
    ];
    const __returned__ = { value, customValue, customButtons, get EditorContent() {
      return EditorContent;
    }, TextEditor, TextEditorFixedMenu, get Button() {
      return __unplugin_components_0;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "p-2" };
const _hoisted_2 = { class: "p-2" };
const _hoisted_3 = { class: "mt-2 flex flex-col justify-between sm:flex-row sm:items-center" };
const _hoisted_4 = { class: "mt-2 flex items-center justify-end space-x-2 sm:mt-0" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    layout: { width: 600, type: "grid" },
    autoPropsDisabled: ""
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["TextEditor"], {
              "editor-class": "prose-sm min-h-[4rem] border rounded-b-lg border-t-0 p-2",
              content: $setup.value,
              placeholder: "Type something...",
              onChange: _cache[0] || (_cache[0] = (val) => $setup.value = val),
              bubbleMenu: true,
              "fixed-menu": true
            }, null, 8, ["content"])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Comment Editor" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2, [
            createVNode($setup["TextEditor"], {
              ref: "textEditor",
              "editor-class": "prose-sm max-w-none min-h-[4rem]",
              content: $setup.customValue,
              onChange: _cache[1] || (_cache[1] = (val) => $setup.customValue = val),
              "starterkit-options": { heading: { levels: [2, 3, 4] } },
              placeholder: "Write something amazing..."
            }, {
              editor: withCtx(({ editor }) => [
                createVNode($setup["EditorContent"], {
                  class: "max-h-[50vh] overflow-y-auto border rounded-lg p-4",
                  editor
                }, null, 8, ["editor"])
              ]),
              bottom: withCtx(() => [
                createBaseVNode("div", _hoisted_3, [
                  createVNode($setup["TextEditorFixedMenu"], {
                    class: "-ml-1 overflow-x-auto",
                    buttons: $setup.customButtons
                  }),
                  createBaseVNode("div", _hoisted_4, [
                    createVNode($setup["Button"], null, {
                      default: withCtx(() => _cache[2] || (_cache[2] = [
                        createTextVNode("Cancel")
                      ])),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode($setup["Button"], { variant: "solid" }, {
                      default: withCtx(() => _cache[3] || (_cache[3] = [
                        createTextVNode("Submit")
                      ])),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["content"])
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/TextEditor/TextEditor.story.vue";
const TextEditor_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/frappe-ui/frappe-ui/src/components/TextEditor/TextEditor.story.vue"]]);
export {
  TextEditor_story as default
};
