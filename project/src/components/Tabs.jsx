import { useDispatch, useSelector } from 'react-redux';
import { setActiveTabs } from '../store/features/searchSlice';

const Tabs = () => {
    const tabs = ['photos', 'videos'];

    const dispatch = useDispatch();

    const activeTab = useSelector((state) => state.search.activeTab);

    return (
        <div className="flex gap-10 p-10">
            {tabs.map((elem, idx) => (
                <button
                    key={idx}
                    className={`${
                        activeTab === elem
                            ? 'bg-blue-500'
                            : 'bg-gray-600'
                    } transition cursor-pointer active:scale-95 px-5 py-2 rounded uppercase`}
                    onClick={() => dispatch(setActiveTabs(elem))}
                >
                    {elem}
                </button>
            ))}
        </div>
    );
};

export default Tabs;