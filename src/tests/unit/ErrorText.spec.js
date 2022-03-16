import { mount } from "@vue/test-utils";
import ErrorText from "../../common/ErrorText";

test("displays message", () => {
  const wrapper = mount(ErrorText, {
    propsData: {
      msg: "Oops, looks like there are too many results, Please try to refine your search",
    },
  });

  expect(wrapper.text()).toContain(
    "Oops, looks like there are too many results, Please try to refine your search"
  );
});
