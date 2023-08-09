"use client";
import { Drawer } from "vaul";
import { PlusIcon } from '@heroicons/react/24/outline'; 

export default function MyDrawer() {
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>
        <span className="badge badge-lg badge-transparent border-dash">
        <PlusIcon className="h-6 w-6 text-gray-400" />
          세부 선택
          </span>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-zinc-100 flex flex-col max-h-[85vh] rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0">
          <div className="p-4 bg-base-100 rounded-t-[10px] flex-1 overflow-auto">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8 " />
            <div className="max-w-2xl mx-auto ">
              <h3 className="text-lg lg:text-xl mb-4">
                제목 
              </h3>
              <p className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tortor mi. Nam condimentum sit amet tellus et facilisis. Nulla dapibus augue in ex posuere tincidunt. Ut enim libero, varius a vehicula quis, semper vitae justo. Curabitur eu massa ut nisl ullamcorper rutrum. Donec volutpat ligula quis tortor imperdiet, eget fringilla erat vestibulum. Cras nec accumsan nunc, et pellentesque magna. Quisque posuere eros ut sem tempor consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean nunc tortor, ultricies fermentum augue at, sodales efficitur lorem. Proin a sem sodales, sagittis eros et, sollicitudin metus. Morbi scelerisque ex vitae lacus ultricies, quis viverra nisi finibus. Suspendisse potenti. Praesent bibendum tincidunt quam ut luctus. Nulla ut ex vitae urna scelerisque feugiat.

Phasellus vel ipsum a arcu commodo molestie. Mauris non ex in tortor cursus commodo ut non tellus. Phasellus quis nisl ante. Quisque urna metus, porta vitae orci euismod, tristique scelerisque orci. Quisque luctus, nisl a hendrerit maximus, lorem ligula commodo tortor, vel viverra dolor sem ut urna. Nam eu arcu id ligula maximus pretium vel sit amet elit. Fusce volutpat vulputate nisl, non ultrices tortor. Praesent faucibus consectetur libero sed condimentum.

Nulla non semper tellus. Etiam vitae orci est. Suspendisse a gravida metus, non sollicitudin turpis. Suspendisse nulla enim, semper eget ante vitae, finibus semper lectus. Curabitur ultrices condimentum urna, id rhoncus mauris tempus nec. Vivamus felis velit, consequat ut aliquam ac, rhoncus at urna. Aliquam tincidunt fringilla metus vel placerat. Quisque non nisl mollis, dapibus nisl sodales, luctus risus.

Suspendisse faucibus iaculis tortor, vitae imperdiet massa hendrerit ac. Aliquam vitae suscipit metus. Donec ut ex vel sapien aliquet eleifend. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque erat diam, lacinia ut turpis sed, posuere faucibus nisl. Suspendisse id risus rhoncus erat sagittis lacinia ut a ante. Aliquam et nibh at orci dapibus maximus. Ut enim justo, rhoncus et quam maximus, tincidunt aliquet nunc.

Nunc ullamcorper velit dolor, sed sollicitudin urna tristique id. Suspendisse potenti. Integer in dignissim lacus. Maecenas tincidunt orci tempus quam finibus gravida. Morbi rutrum vulputate mi, nec iaculis lorem dapibus ac. Sed quis mi mattis, consequat ipsum eget, imperdiet lorem. Sed pellentesque justo ac quam fringilla, et hendrerit libero sodales. Cras a malesuada metus. Pellentesque imperdiet tortor eros, sed sagittis leo egestas ac. Phasellus semper turpis sed velit iaculis laoreet. Donec suscipit blandit faucibus. Ut lacinia erat vel lectus lobortis varius. Fusce lacinia augue et sem pretium dignissim. Aenean et purus id nulla ullamcorper molestie. Aliquam velit risus, tempus eget efficitur quis, accumsan id arcu.

 
              </p>
              <p className=" mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tortor mi. Nam condimentum sit amet tellus et facilisis. Nulla dapibus augue in ex posuere tincidunt. Ut enim libero, varius a vehicula quis, semper vitae justo. Curabitur eu massa ut nisl ullamcorper rutrum. Donec volutpat ligula quis tortor imperdiet, eget fringilla erat vestibulum. Cras nec accumsan nunc, et pellentesque magna. Quisque posuere eros ut sem tempor consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean nunc tortor, ultricies fermentum augue at, sodales efficitur lorem. Proin a sem sodales, sagittis eros et, sollicitudin metus. Morbi scelerisque ex vitae lacus ultricies, quis viverra nisi finibus. Suspendisse potenti. Praesent bibendum tincidunt quam ut luctus. Nulla ut ex vitae urna scelerisque feugiat.

Phasellus vel ipsum a arcu commodo molestie. Mauris non ex in tortor cursus commodo ut non tellus. Phasellus quis nisl ante. Quisque urna metus, porta vitae orci euismod, tristique scelerisque orci. Quisque luctus, nisl a hendrerit maximus, lorem ligula commodo tortor, vel viverra dolor sem ut urna. Nam eu arcu id ligula maximus pretium vel sit amet elit. Fusce volutpat vulputate nisl, non ultrices tortor. Praesent faucibus consectetur libero sed condimentum.

Nulla non semper tellus. Etiam vitae orci est. Suspendisse a gravida metus, non sollicitudin turpis. Suspendisse nulla enim, semper eget ante vitae, finibus semper lectus. Curabitur ultrices condimentum urna, id rhoncus mauris tempus nec. Vivamus felis velit, consequat ut aliquam ac, rhoncus at urna. Aliquam tincidunt fringilla metus vel placerat. Quisque non nisl mollis, dapibus nisl sodales, luctus risus.

Suspendisse faucibus iaculis tortor, vitae imperdiet massa hendrerit ac. Aliquam vitae suscipit metus. Donec ut ex vel sapien aliquet eleifend. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque erat diam, lacinia ut turpis sed, posuere faucibus nisl. Suspendisse id risus rhoncus erat sagittis lacinia ut a ante. Aliquam et nibh at orci dapibus maximus. Ut enim justo, rhoncus et quam maximus, tincidunt aliquet nunc.

Nunc ullamcorper velit dolor, sed sollicitudin urna tristique id. Suspendisse potenti. Integer in dignissim lacus. Maecenas tincidunt orci tempus quam finibus gravida. Morbi rutrum vulputate mi, nec iaculis lorem dapibus ac. Sed quis mi mattis, consequat ipsum eget, imperdiet lorem. Sed pellentesque justo ac quam fringilla, et hendrerit libero sodales. Cras a malesuada metus. Pellentesque imperdiet tortor eros, sed sagittis leo egestas ac. Phasellus semper turpis sed velit iaculis laoreet. Donec suscipit blandit faucibus. Ut lacinia erat vel lectus lobortis varius. Fusce lacinia augue et sem pretium dignissim. Aenean et purus id nulla ullamcorper molestie. Aliquam velit risus, tempus eget efficitur quis, accumsan id arcu.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tortor mi. Nam condimentum sit amet tellus et facilisis. Nulla dapibus augue in ex posuere tincidunt. Ut enim libero, varius a vehicula quis, semper vitae justo. Curabitur eu massa ut nisl ullamcorper rutrum. Donec volutpat ligula quis tortor imperdiet, eget fringilla erat vestibulum. Cras nec accumsan nunc, et pellentesque magna. Quisque posuere eros ut sem tempor consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean nunc tortor, ultricies fermentum augue at, sodales efficitur lorem. Proin a sem sodales, sagittis eros et, sollicitudin metus. Morbi scelerisque ex vitae lacus ultricies, quis viverra nisi finibus. Suspendisse potenti. Praesent bibendum tincidunt quam ut luctus. Nulla ut ex vitae urna scelerisque feugiat.

Phasellus vel ipsum a arcu commodo molestie. Mauris non ex in tortor cursus commodo ut non tellus. Phasellus quis nisl ante. Quisque urna metus, porta vitae orci euismod, tristique scelerisque orci. Quisque luctus, nisl a hendrerit maximus, lorem ligula commodo tortor, vel viverra dolor sem ut urna. Nam eu arcu id ligula maximus pretium vel sit amet elit. Fusce volutpat vulputate nisl, non ultrices tortor. Praesent faucibus consectetur libero sed condimentum.

Nulla non semper tellus. Etiam vitae orci est. Suspendisse a gravida metus, non sollicitudin turpis. Suspendisse nulla enim, semper eget ante vitae, finibus semper lectus. Curabitur ultrices condimentum urna, id rhoncus mauris tempus nec. Vivamus felis velit, consequat ut aliquam ac, rhoncus at urna. Aliquam tincidunt fringilla metus vel placerat. Quisque non nisl mollis, dapibus nisl sodales, luctus risus.

Suspendisse faucibus iaculis tortor, vitae imperdiet massa hendrerit ac. Aliquam vitae suscipit metus. Donec ut ex vel sapien aliquet eleifend. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque erat diam, lacinia ut turpis sed, posuere faucibus nisl. Suspendisse id risus rhoncus erat sagittis lacinia ut a ante. Aliquam et nibh at orci dapibus maximus. Ut enim justo, rhoncus et quam maximus, tincidunt aliquet nunc.

Nunc ullamcorper velit dolor, sed sollicitudin urna tristique id. Suspendisse potenti. Integer in dignissim lacus. Maecenas tincidunt orci tempus quam finibus gravida. Morbi rutrum vulputate mi, nec iaculis lorem dapibus ac. Sed quis mi mattis, consequat ipsum eget, imperdiet lorem. Sed pellentesque justo ac quam fringilla, et hendrerit libero sodales. Cras a malesuada metus. Pellentesque imperdiet tortor eros, sed sagittis leo egestas ac. Phasellus semper turpis sed velit iaculis laoreet. Donec suscipit blandit faucibus. Ut lacinia erat vel lectus lobortis varius. Fusce lacinia augue et sem pretium dignissim. Aenean et purus id nulla ullamcorper molestie. Aliquam velit risus, tempus eget efficitur quis, accumsan id arcu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tortor mi. Nam condimentum sit amet tellus et facilisis. Nulla dapibus augue in ex posuere tincidunt. Ut enim libero, varius a vehicula quis, semper vitae justo. Curabitur eu massa ut nisl ullamcorper rutrum. Donec volutpat ligula quis tortor imperdiet, eget fringilla erat vestibulum. Cras nec accumsan nunc, et pellentesque magna. Quisque posuere eros ut sem tempor consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean nunc tortor, ultricies fermentum augue at, sodales efficitur lorem. Proin a sem sodales, sagittis eros et, sollicitudin metus. Morbi scelerisque ex vitae lacus ultricies, quis viverra nisi finibus. Suspendisse potenti. Praesent bibendum tincidunt quam ut luctus. Nulla ut ex vitae urna scelerisque feugiat.

Phasellus vel ipsum a arcu commodo molestie. Mauris non ex in tortor cursus commodo ut non tellus. Phasellus quis nisl ante. Quisque urna metus, porta vitae orci euismod, tristique scelerisque orci. Quisque luctus, nisl a hendrerit maximus, lorem ligula commodo tortor, vel viverra dolor sem ut urna. Nam eu arcu id ligula maximus pretium vel sit amet elit. Fusce volutpat vulputate nisl, non ultrices tortor. Praesent faucibus consectetur libero sed condimentum.

Nulla non semper tellus. Etiam vitae orci est. Suspendisse a gravida metus, non sollicitudin turpis. Suspendisse nulla enim, semper eget ante vitae, finibus semper lectus. Curabitur ultrices condimentum urna, id rhoncus mauris tempus nec. Vivamus felis velit, consequat ut aliquam ac, rhoncus at urna. Aliquam tincidunt fringilla metus vel placerat. Quisque non nisl mollis, dapibus nisl sodales, luctus risus.

Suspendisse faucibus iaculis tortor, vitae imperdiet massa hendrerit ac. Aliquam vitae suscipit metus. Donec ut ex vel sapien aliquet eleifend. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque erat diam, lacinia ut turpis sed, posuere faucibus nisl. Suspendisse id risus rhoncus erat sagittis lacinia ut a ante. Aliquam et nibh at orci dapibus maximus. Ut enim justo, rhoncus et quam maximus, tincidunt aliquet nunc.

Nunc ullamcorper velit dolor, sed sollicitudin urna tristique id. Suspendisse potenti. Integer in dignissim lacus. Maecenas tincidunt orci tempus quam finibus gravida. Morbi rutrum vulputate mi, nec iaculis lorem dapibus ac. Sed quis mi mattis, consequat ipsum eget, imperdiet lorem. Sed pellentesque justo ac quam fringilla, et hendrerit libero sodales. Cras a malesuada metus. Pellentesque imperdiet tortor eros, sed sagittis leo egestas ac. Phasellus semper turpis sed velit iaculis laoreet. Donec suscipit blandit faucibus. Ut lacinia erat vel lectus lobortis varius. Fusce lacinia augue et sem pretium dignissim. Aenean et purus id nulla ullamcorper molestie. Aliquam velit risus, tempus eget efficitur quis, accumsan id arcu.
              </p>
            </div>
          </div>
          <div className="p-4 bg-zinc-100 border-t border-zinc-200 mt-auto">
            <div className="flex gap-6 justify-end max-w-md mx-auto">
              <a
                className="text-xs text-zinc-600 flex items-center gap-0.25"
                href="https://github.com/emilkowalski/vaul"
                target="_blank"
              >
                GitHub
                <svg
                  fill="none"
                  height="16"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  width="16"
                  aria-hidden="true"
                  className="w-3 h-3 ml-1"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14L21 3"></path>
                </svg>
              </a>
              <a
                className="text-xs text-zinc-600 flex items-center gap-0.25"
                href="https://twitter.com/emilkowalski_"
                target="_blank"
              >
                Twitter
                <svg
                  fill="none"
                  height="16"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  width="16"
                  aria-hidden="true"
                  className="w-3 h-3 ml-1"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14L21 3"></path>
                </svg>
              </a>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
