import {container} from '@/shared/container';
import {createLocalVue, shallowMount, Wrapper} from '@vue/test-utils';
import filters from '@/shared/filters';
import VueRouter from 'vue-router';
import {storeFactory} from '@/store';
import Widget from '@/components/Widget.vue';
import {WidgetStateMixin} from '@owui-commons/vue-widget-state-manager';

const localVue = createLocalVue();
localVue.use(filters);
localVue.use(VueRouter);
const store = storeFactory(localVue);
const router = new VueRouter();

describe('Widget', () => {
  let wrapper: Wrapper<Widget>;
  let widgetReadySpy: jest.SpyInstance;
  let widgetErrorSpy: jest.SpyInstance;

  beforeEach(() => {
    container.snapshot();
  });

  afterEach(() => {
    container.restore();
  });

  beforeEach(() => {
    wrapper = shallowMount(Widget, {
      store,
      router,
      localVue,
      mocks: {
        $t: jest.fn(),
        $externalEmit: jest.fn(),
      },
    });
    jest.spyOn(wrapper.vm.$store, 'dispatch');
    widgetReadySpy = jest.spyOn(wrapper.vm as WidgetStateMixin, 'setWidgetReady');
    widgetErrorSpy = jest.spyOn(wrapper.vm as WidgetStateMixin, 'setWidgetError');
  });

  it('should create the component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

});
