import TodoInput from './components/TodoInput';
import 'react-tabs/style/react-tabs.css';
import "./output.css"
import "./App.css";
import { CompletedTodos, Todos, UncompletedTodos } from './components/Todos';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const App = () => (
    <div className="App">
        <section>
            <Tabs className={"react-tabs flex flex-row gap-12"} selectedTabClassName={"text-2xl font-bold"}>
                <TabList className={"react-tabs__tab-list flex flex-col align-items-center w-3/12"}>
                    <div className={"text-3xl font-bold px-8 py-24 bg-blue-700 text-white rounded"}>
                        Todo <br /> Dashboard
                    </div>
                    <Tab className={"react-tabs__tab"}>All</Tab>
                    <Tab className={"react-tabs__tab"}>Completed</Tab>
                    <Tab className={"react-tabs__tab"}>Uncompleted</Tab>
                </TabList>

                <TabPanel className={"react-tabs__tab-panel"}>
                    <div className={"todo-wrappe"}>
                        <div className={"text-3xl font-semibold py-8 sticky top-0 backdrop-blur-sm bg-white/90"}>
                            <button type={"button"} className={"absolute right-0 top-4 text-base bg-blue-300 text-white p-4 rounded-lg cursor-not-allowed"}>Mark all as Complete</button>
                            <span className={"fa fa-list-check pr-4"}></span> All Todos
                        </div>
                        <Todos />
                    </div>
                </TabPanel>
                <TabPanel className={"react-tabs__tab-panel"}>
                    <div className={"text-3xl font-semibold py-8 sticky top-0 backdrop-blur-sm bg-white/90"}>
                        <span className={"fa fa-square-check pr-4"}></span> Completed Todos
                    </div>
                    <div>
                        <CompletedTodos />
                    </div>
                </TabPanel>
                <TabPanel className={"react-tabs__tab-panel"}>
                    <div className={"text-3xl font-semibold py-8 sticky top-0 backdrop-blur-sm bg-white/90"}>
                        <span className={"far fa-square pr-4"}></span> Uncompleted Todos
                    </div>
                    <div>
                        <UncompletedTodos />
                    </div>
                </TabPanel>
            </Tabs>
            {/* <div className="flex flex-wrap">
                <div className="border-r border-gray-200 dark:border-gray-700">
                    <div className={'p-12'}>Todo App</div>
                    <nav className="flex flex-col space-y-2 justify-center" aria-label="Tabs" role="tablist" data-hs-tabs-vertical="true">
                        <button type="button" className="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-1 pr-4 inline-flex items-center gap-2 border-r-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 active" id="vertical-tab-with-border-item-1" data-hs-tab="#vertical-tab-with-border-1" aria-controls="vertical-tab-with-border-1" role="tab">
                            Tab 1
                        </button>
                        <button type="button" className="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-1 pr-4 inline-flex items-center gap-2 border-r-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 dark:hover:text-gray-300" id="vertical-tab-with-border-item-2" data-hs-tab="#vertical-tab-with-border-2" aria-controls="vertical-tab-with-border-2" role="tab">
                            Tab 2
                        </button>
                        <button type="button" className="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-1 pr-4 inline-flex items-center gap-2 border-r-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 dark:hover:text-gray-300" id="vertical-tab-with-border-item-3" data-hs-tab="#vertical-tab-with-border-3" aria-controls="vertical-tab-with-border-3" role="tab">
                            Tab 3
                        </button>
                    </nav>
                </div>

                <div className="todo-wrapper w-100 overflow-y-auto">
                    <div className="ml-3">
                        <div id="vertical-tab-with-border-1" role="tabpanel" aria-labelledby="vertical-tab-with-border-item-1">
                            <p className="text-gray-500 dark:text-gray-400">
                                This is the <em className="font-semibold text-gray-800 dark:text-gray-200">first</em> item's tab body.
                            </p>
                            <Todos />
                        </div>
                        <div id="vertical-tab-with-border-2" className="hidden" role="tabpanel" aria-labelledby="vertical-tab-with-border-item-2">
                            <CompletedTodos />
                        </div>
                        <div id="vertical-tab-with-border-3" className="hidden" role="tabpanel" aria-labelledby="vertical-tab-with-border-item-3">
                            <UncompletedTodos />
                        </div>
                    </div>
                </div>
                <TodoInput />
            </div> */}
        </section>
    </div>
)

export default App;