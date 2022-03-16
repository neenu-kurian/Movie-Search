import { mount } from "@vue/test-utils";
import Button from "../../common/Button";

test("displays message", () => {
  
  const wrapper = mount(Button, {
    propsData: {
      msg: "Search",
    },
  });

  expect(wrapper.text()).toContain("Search");
});

test('triggers a click', async () => {
  const wrapper = mount(Button)

  await wrapper.trigger('click')
});
