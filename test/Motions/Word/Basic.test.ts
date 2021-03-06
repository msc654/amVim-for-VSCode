import * as assert from 'assert';
import * as TestUtil from '../../Util';
import {Position} from 'vscode';

import {Configuration} from '../../../src/Configuration';
import {MotionWord} from '../../../src/Motions/Word';

export function run() {

    Configuration.init();

    test('MotionWord: Next start', (done) => {
        TestUtil.createTempDocument('  foo bar baz    fum-nom').then(() => {

            let apply = (fromCharacter) => {
                let motion = MotionWord.nextStart();
                return motion.apply(new Position(0, fromCharacter)).character;
            };

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //  ^ *
            assert.equal(apply(0), 2);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //   ^*
            assert.equal(apply(1), 2);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //    ^   *
            assert.equal(apply(2), 6);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //     ^  *
            assert.equal(apply(3), 6);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //      ^ *
            assert.equal(apply(4), 6);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //       ^*
            assert.equal(apply(5), 6);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //        ^   *
            assert.equal(apply(6), 10);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //         ^  *
            assert.equal(apply(7), 10);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //          ^ *
            assert.equal(apply(8), 10);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //           ^*
            assert.equal(apply(9), 10);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //            ^      *
            assert.equal(apply(10), 17);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //             ^     *
            assert.equal(apply(11), 17);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //              ^    *
            assert.equal(apply(12), 17);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //               ^   *
            assert.equal(apply(13), 17);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //                ^  *
            assert.equal(apply(14), 17);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //                 ^ *
            assert.equal(apply(15), 17);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //                  ^*
            assert.equal(apply(16), 17);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //                   ^  *
            assert.equal(apply(17), 20);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //                    ^ *
            assert.equal(apply(18), 20);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //                     ^*
            assert.equal(apply(19), 20);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //                      ^*
            assert.equal(apply(20), 21);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //                       ^  *
            assert.equal(apply(21), 24);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //                        ^ *
            assert.equal(apply(22), 24);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //                         ^*
            assert.equal(apply(23), 24);

            done();

        });
    });

    test('MotionWord: Next end', (done) => {
        TestUtil.createTempDocument('  foo bar baz    fum-nom').then(() => {

            let apply = (fromCharacter) => {
                let motion = MotionWord.nextEnd();
                return motion.apply(new Position(0, fromCharacter)).character;
            };

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //  ^   *
            assert.equal(apply(0), 4);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //   ^  *
            assert.equal(apply(1), 4);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //    ^ *
            assert.equal(apply(2), 4);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //     ^*
            assert.equal(apply(2), 4);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //      ^   *
            assert.equal(apply(4), 8);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //       ^  *
            assert.equal(apply(5), 8);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //        ^ *
            assert.equal(apply(6), 8);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //         ^*
            assert.equal(apply(7), 8);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //          ^   *
            assert.equal(apply(8), 12);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //           ^  *
            assert.equal(apply(9), 12);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //            ^ *
            assert.equal(apply(10), 12);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //             ^*
            assert.equal(apply(11), 12);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //              ^      *
            assert.equal(apply(12), 19);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //               ^     *
            assert.equal(apply(13), 19);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //                ^    *
            assert.equal(apply(14), 19);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //                 ^   *
            assert.equal(apply(15), 19);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //                  ^  *
            assert.equal(apply(16), 19);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //                   ^ *
            assert.equal(apply(17), 19);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //                    ^*
            assert.equal(apply(18), 19);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //                     ^*
            assert.equal(apply(19), 20);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //                      ^  *
            assert.equal(apply(20), 23);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //                       ^ *
            assert.equal(apply(21), 23);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //                        ^*
            assert.equal(apply(22), 23);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //                         ^*
            assert.equal(apply(23), 24);

            done();

        });
    });

    test('MotionWord: Prev start', (done) => {
        TestUtil.createTempDocument('  foo bar baz    fum-nom').then(() => {

            let apply = (fromCharacter) => {
                let motion = MotionWord.prevStart();
                return motion.apply(new Position(0, fromCharacter)).character;
            };

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            // *^
            assert.equal(apply(0), 0);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            // * ^
            assert.equal(apply(1), 0);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            // *  ^
            assert.equal(apply(2), 0);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //    *^
            assert.equal(apply(3), (2));

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //    * ^
            assert.equal(apply(4), (2));

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //    *  ^
            assert.equal(apply(5), (2));

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //    *   ^
            assert.equal(apply(6), (2));

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //        *^
            assert.equal(apply(7), (6));

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //        * ^
            assert.equal(apply(8), (6));

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //        *  ^
            assert.equal(apply(9), (6));

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //        *   ^
            assert.equal(apply(10), (6));

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //            *^
            assert.equal(apply(11), (10));

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //            * ^
            assert.equal(apply(12), (10));

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //            *  ^
            assert.equal(apply(13), (10));

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //            *   ^
            assert.equal(apply(14), (10));

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //            *    ^
            assert.equal(apply(15), (10));

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //            *     ^
            assert.equal(apply(16), (10));

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //            *      ^
            assert.equal(apply(17), (10));

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //                   *^
            assert.equal(apply(18), (17));

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //                   * ^
            assert.equal(apply(19), (17));

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //                   *  ^
            assert.equal(apply(20), (17));

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //                      *^
            assert.equal(apply(21), (20));

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //                       *^
            assert.equal(apply(22), (21));

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //                       * ^
            assert.equal(apply(23), (21));

            done();

        });
    });

    test('MotionWord: Prev end', (done) => {
        TestUtil.createTempDocument('  foo bar baz    fum-nom').then(() => {

            let apply = (fromCharacter) => {
                let motion = MotionWord.prevEnd();
                return motion.apply(new Position(0, fromCharacter)).character;
            };

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            // *^
            assert.equal(apply(0), 0);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            // * ^
            assert.equal(apply(1), 0);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            // *  ^
            assert.equal(apply(2), 0);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            // *   ^
            assert.equal(apply(3), 0);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            // *    ^
            assert.equal(apply(4), 0);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //      *^
            assert.equal(apply(5), 4);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //      * ^
            assert.equal(apply(6), 4);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //      *  ^
            assert.equal(apply(7), 4);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //      *   ^
            assert.equal(apply(8), 4);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //          *^
            assert.equal(apply(9), 8);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //          * ^
            assert.equal(apply(10), 8);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //          *  ^
            assert.equal(apply(11), 8);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //          *   ^
            assert.equal(apply(12), 8);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //              *^
            assert.equal(apply(13), 12);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //              * ^
            assert.equal(apply(14), 12);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //              *  ^
            assert.equal(apply(15), 12);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //              *   ^
            assert.equal(apply(16), 12);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //              *    ^
            assert.equal(apply(17), 12);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //              *     ^
            assert.equal(apply(18), 12);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //              *      ^
            assert.equal(apply(19), 12);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //                     *^
            assert.equal(apply(20), 19);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //                      *^
            assert.equal(apply(21), 20);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //                      * ^
            assert.equal(apply(22), 20);

            //  0123456789112345678921234
            // '  foo bar baz    fum-nom'
            //                      *  ^
            assert.equal(apply(23), 20);

            done();

        });
    });
}
