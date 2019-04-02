# okWebStorage
Operated HTML5 Local/Session Storage in ES6.

# Install
```
yarn add okwebstorage
```

# Use with ES6
```
import * as WebStorage from 'okwebstorage';

// Local Storage
WebStorage.Local.set(key, value);
WebStorage.Local.get(key);
WebStorage.Local.remove(key);
WebStorage.Local.clear();

// Session Storage
WebStorage.Session.set(key, value);
WebStorage.Session.get(key);
WebStorage.Session.remove(key);
WebStorage.Session.clear();
```

### License

okWebStorage is released under the [Apache 2.0 license](LICENSE).

```
Copyright 2018 Johnny Chu<chuhsun@gmail.com>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
